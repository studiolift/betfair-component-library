document.addEventListener('DOMContentLoaded', function() {
  console.log('Head to Head Loaded');

  // Find all chart containers
  const chartContainers = document.querySelectorAll('.data_viz__chart');

  chartContainers.forEach((container) => {

    // Chart colors
    const styles = getComputedStyle(container);

    const homeTeamColour = styles.getPropertyValue('--home-team-colour').trim() || '#3073e7';
    const drawColour = styles.getPropertyValue('--draw-colour').trim() || '#343436';
    const awayTeamColour = styles.getPropertyValue('--away-team-colour').trim() || '#e27229';

    // Read odds from data attributes (default to 0 if missing)
    const homeTeamOdds = parseFloat(container.dataset.homeOdds) || 0;
    const awayTeamOdds = parseFloat(container.dataset.awayOdds) || 0;
    const drawOdds = parseFloat(container.dataset.drawOdds) || 0;

    const canvas = container.querySelector('canvas.chart');
    const ctx = canvas.getContext('2d');

    let animationProgress = 0;

    function resizeCanvas() {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      drawChart();
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    function drawChart() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let data;

      if (drawOdds == 0) {

        data = [
          { label: 'Home', value: homeTeamOdds, color: homeTeamColour },
          { label: 'Space1', value: 0.5, color: 'transparent' },
          { label: 'Away', value: awayTeamOdds, color: awayTeamColour }
        ];

      } else {

        data = [
          { label: 'Home', value: homeTeamOdds, color: homeTeamColour },
          { label: 'Space1', value: 0.5, color: 'transparent' },
          { label: 'Draw', value: drawOdds, color: drawColour },
          { label: 'Space2', value: 0.5, color: 'transparent' },
          { label: 'Away', value: awayTeamOdds, color: awayTeamColour }
        ];

      }

      const degToRad = (deg) => (deg * Math.PI) / 180;
      let startAngle = degToRad(180);
      const total = data.reduce((sum, d) => sum + d.value, 0);

      const radius = Math.min(canvas.width, canvas.height * 2) / 2;
      const centerX = canvas.width / 2;
      const centerY = canvas.height;

      data.forEach(d => {
        const sliceAngle = degToRad(180 * (d.value / total)) * animationProgress;

        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle, false);
        ctx.closePath();
        ctx.fillStyle = d.color;
        ctx.fill();

        startAngle += sliceAngle;
      });

      // Inner donut
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 0.7, degToRad(180), degToRad(360), false);
      ctx.lineTo(centerX, centerY);
      ctx.closePath();
      ctx.fill();
      ctx.globalCompositeOperation = 'source-over';
    }

    function animate() {
      animationProgress += 0.005;
      if (animationProgress > 1) animationProgress = 1;

      drawChart();

      if (animationProgress < 1) {
        requestAnimationFrame(animate);
      }
    }

    animate();
  });
});