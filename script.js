      // Get the positions of the balls
      const ball1 = new THREE.Vector3(-2, 1, -3);
      const ball2 = new THREE.Vector3(-2, 4, -3);
      const ball3 = new THREE.Vector3(2, 4, -3);
      const ball4 = new THREE.Vector3(2, 1, -3);
      const cball1 = document.getElementById('ball1');
      const cball2 = document.getElementById('ball2');
      const cball3 = document.getElementById('ball3');
      const cball4 = document.getElementById('ball4');
      cball1.setAttribute('position', ball1);
      cball2.setAttribute('position', ball2);
      cball3.setAttribute('position', ball3);
      cball4.setAttribute('position', ball4);

      // Create a cubic Bezier curve
      const curve = new THREE.CubicBezierCurve3(ball1, ball2, ball3, ball4);

      let t = 0;

      function animateCube() {
        const cube = document.getElementById('movingCube');
        
        // Get the point on the curve at parameter t
        const point = curve.getPoint(t);
        
        // Update the position of the cube
        cube.setAttribute('position', `${point.x} ${point.y} ${point.z}`);
        
        
        
        // Increment t for the next frame
        t += 0.001;
        if (t > 1) t = 0; // Loop the animation
        
        // Request the next frame
        requestAnimationFrame(animateCube);
      }

      // Start the animation
      animateCube();

