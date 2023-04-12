const button = document.querySelector('.draw-btn'); 
button.addEventListener('click', function drawCircle() {

    const inputArea = document.createElement('input');
    inputArea.setAttribute("type", "number");
    inputArea.placeholder = 'Enter circle diameter'; 
    document.body.appendChild(inputArea); 

    const buttonDraw = document.createElement('button');
    buttonDraw.setAttribute("type", "buttton");
    buttonDraw.innerText = 'Draw';
    document.body.appendChild(buttonDraw); 

    button.remove(); 

    buttonDraw.addEventListener('click', function draw() {
        const circleDiameter = inputArea.value; 
        inputArea.remove();
        buttonDraw.remove(); 

        const ROOT = document.querySelector('#root');
        const CIRCLE_CLASS = 'round';
        
        function createCircle(){
            const divCircle = document.createElement('div');

            divCircle.classList.add(CIRCLE_CLASS);
            divCircle.style.width = circleDiameter + 'px'; 
            divCircle.style.height = circleDiameter + 'px'; 
            divCircle.style.borderRadius = '50%';
            divCircle.style.backgroundColor = getRandomHexColor();

            return divCircle;
        }
        
        const circlesCollection = document.createDocumentFragment();
        
        for(let i = 0; i < 100; i++){
            const circle = createCircle();
            circlesCollection.append(circle)
        }
        
        ROOT.addEventListener('click', function(event) {
            console.log('event', event)
            const clickedTarget = event.target;
            
            if(!clickedTarget.classList.contains(CIRCLE_CLASS)){
                return;
            }
            
            clickedTarget.remove();
        })
        
        ROOT.append(circlesCollection);
        
        function getRandomHexColor() {
            return `#${Math.floor(Math.random() * 16777215)
                .toString(16)
                .padStart(6, 0)}`;
        };
    })
})