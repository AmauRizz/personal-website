import { useEffect, useRef } from 'react';

const BackgroundScene = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Définir la taille du canvas
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Paramètres de l'effet de fond
        const numPoints = 50;
        const MAX_DIST = 150

        let points = [];
        // Créer des points aléatoires
        for (let i = 0; i < numPoints; i++) {
            points.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 2 + 1, // taille des points
                velocity: { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 } // vitesse des points
            });
        }

        // Fonction pour dessiner les points et les lignes
        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Effacer le canvas à chaque frame
            ctx.fillStyle = '#fff'; // Couleur des points

            // Dessiner les points
            points.forEach(point => {
                point.x += point.velocity.x;
                point.y += point.velocity.y;

                if (point.x < -10 || point.x > canvas.width+10 || point.y < -10 || point.y > canvas.height+10) {
                    points.splice(points.indexOf(point), 1);

                    const randPoints = points[Math.floor(Math.random() * points.length)]
                    points.push({
                        x: randPoints.x,
                        y: randPoints.y,
                        radius: Math.random() * 2 + 1, // taille des points
                        velocity: { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 } // vitesse des points
                    });
                }

                ctx.beginPath();
                ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
                ctx.fill();
            });

            // Relier les points par des lignes
            points.forEach((point1) => {
                points.forEach((point2) => {
                    const dist = Math.sqrt((point1.x - point2.x) ** 2 + (point1.y - point2.y) ** 2);
                    if (dist < MAX_DIST) { // Si les points sont proches
                        const transparency = 1 - dist / MAX_DIST; // Opacité des lignes

                        ctx.beginPath();
                        ctx.moveTo(point1.x, point1.y);
                        ctx.lineTo(point2.x, point2.y);
                        ctx.strokeStyle = `rgba(255, 255, 255, ${transparency})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                });
            });

            requestAnimationFrame(draw); // Boucle d'animation
        };

        draw(); // Démarrer le dessin

        // Réajuster la taille du canvas lors du redimensionnement
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
};

export default BackgroundScene;
