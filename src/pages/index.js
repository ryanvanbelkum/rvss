import React, {useEffect, useRef} from "react"
import Matter from 'matter-js';
import randomcolor from 'randomcolor';
import SEO from "../components/seo"
import Layout from "../components/layout/layout"
import Contact from '../components/contact/contact';

import './index.scss';

const random = (min, max) => Math.random() * (max - min) + min;

const Page2 = () => {
  let engine = useRef({});
  const canvas = useRef(null);

  const scaterBalls = function() {
    const bodies = Matter.Composite.allBodies(engine.current.world);

    for (let i = 0; i < bodies.length; i++) {
      const body = bodies[i];

      if (!body.isStatic && body.position.y >= 500) {
        const forceMagnitude = 0.05 * body.mass;

        Matter.Body.applyForce(body, body.position, {
          x: (forceMagnitude + Matter.Common.random() * forceMagnitude) * Matter.Common.choose([1, -1]),
          y: -forceMagnitude + Matter.Common.random() * -forceMagnitude
        });
      }
    }
  };

  useEffect(() => {
    const width = window.innerWidth
    const height = window.innerHeight;
    let BALL_COUNT = width / 50;
    let MAX_COUNT = width < 800 ? BALL_COUNT + 10 : 200;

    engine.current = Matter.Engine.create();
    const world = engine.current.world;
    const render = Matter.Render.create({
      canvas: canvas.current,
      engine: engine.current,
      options: {
        width,
        height,
        background: 'transparent',
        wireframes: false,
        showAngleIndicator: false
      }
    });

    let balls = [];
    for(let i = 0; i < BALL_COUNT; i++){
      balls.push(Matter.Bodies.circle(random(0, width), -random(0, 150), random(10, 50), {
        density: 0.04,
        friction: 0.01,
        frictionAir: 0.00001,
        restitution: 0.8,
        render: {
          fillStyle: randomcolor(),
        }
      }));
    }
    Matter.World.add(world, balls);

    // bounds
    Matter.World.add(world, [
      Matter.Bodies.rectangle(width / 2, height, width, 20, { // floor
        isStatic: true,
        render: {
          visible: false
        }
      }),
      Matter.Bodies.rectangle(width, height / 2, 10, height, { isStatic: true, render: {
          visible: false,
        } }),
      Matter.Bodies.rectangle(0, height / 2, 10, height, { isStatic: true, render: {
          visible: false,
        } }),
    ]);

    const mouse = Matter.Mouse.create(
      canvas.current,
      {
        enabledEvents: {
          mousewheel: false
        }
      }
    );
    mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
    mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);
    Matter.World.add(world, mouse);

    //Start the engine
    Matter.Engine.run(engine.current);
    Matter.Render.run(render);

    const interval = setInterval(() => {
      if(BALL_COUNT === MAX_COUNT){
        clearInterval(interval);
        return;
      }

      const newBall = Matter.Bodies.circle(random(0, width), -300, random(10, 50), {
        density: 0.04,
        friction: 0.01,
        frictionAir: 0.00001,
        restitution: 0.8,
        render: {
          fillStyle: randomcolor(),
        }
      });
      Matter.World.add(world, newBall);
      BALL_COUNT = Math.round(BALL_COUNT) + 1;
    }, 500);


    return () => {
      render.canvas.remove();
      clearInterval(interval);
    }
  }, []);

  return (
    <Layout className="home">
      <SEO title="Home" />
      <canvas ref={canvas} />
      <section className="home__intro">
        <h1>Websites should be unique.</h1>
      </section>
      <section>
        <h1>Just like these super balls.</h1>
      </section>
      <section>
        <h1>So why aren't they?</h1>
      </section>
      <section className="home__disrupt">
        <h1>Disrupt your market.</h1>
        <span className="home__disrupt-click" onClick={scaterBalls} />
      </section>
      <section className="home__contact">
        <Contact />
      </section>
    </Layout>
  )
}

export default Page2
