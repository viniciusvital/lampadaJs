const ligada = document.getElementById('lampOn');
        const desligada = document.getElementById('lampOff');
        const lamp = document.getElementById('lampada');

        function isLampadaQuebrada() {
            const isQuebrada = lampada.src.includes('quebrada');
            return isQuebrada;
        }

        function lampOn() {
            if (!isLampadaQuebrada()) {
                lampada.src = './img/ligada.jpg';
            }
        }

        function lampOff() {
            if (!isLampadaQuebrada()) {
                lampada.src = './img/desligada.jpg';
            }
        }

        function lampBroken() {
            lamp.src = './img/quebrada.jpg';
        }

        function lampBrokenSound() {
            var audio = document.getElementById('audio');
            audio.play();
        }

        ligada.addEventListener('click', lampOn);
        desligada.addEventListener('click', lampOff);
        lampada.addEventListener('mouseover', lampOn);
        lampada.addEventListener('mouseleave', lampOff);
        lampada.addEventListener('dblclick', function(){
            lampBrokenSound();
            lampBroken();
        });