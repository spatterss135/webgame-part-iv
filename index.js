const inventory = newInventory()
move(inventory).to(0, 0)

const character = newImage('assets/green-character/static.gif')
let direction = null
let x = 100
let y = 250
move(character).to(x,y)


const MOVEMENT_SPEED = .15
let counter = 0
let previousTimeStamp = 0;

let xPlus = 0
let yPlus = 0

function step(timestamp){
    // console.log(timestamp - previousTimeStamp)
    counter += timestamp - previousTimeStamp
    previousTimeStamp = timestamp
    if (counter > MOVEMENT_SPEED*1000) {
        counter = 0
        x += xPlus
        y += yPlus
        move(character).to(x,y)
    }
    window.requestAnimationFrame(step)
}

window.addEventListener('keydown', moveCharacter) 
window.addEventListener('keyup', stopCharacter) 

function stopCharacter() {
    xPlus= 0 
    yPlus = 0
}

function moveCharacter(e) {
    if (e.key === 'ArrowRight') {
        xPlus = 10
        yPlus = 0
        character.src = 'assets/green-character/east.gif'
        window.requestAnimationFrame(step)
    }
    if (e.key === 'ArrowLeft') {
        xPlus = -10
        yPlus = 0
        character.src = 'assets/green-character/west.gif'
        window.requestAnimationFrame(step)
    }
    if (e.key === 'ArrowDown') {
        xPlus = 0
        yPlus = -10
        character.src = 'assets/green-character/south.gif'
        window.requestAnimationFrame(step)
    }
    if (e.key === 'ArrowUp') {
        xPlus = 0
        yPlus = 10
        character.src = 'assets/green-character/north.gif'
        window.requestAnimationFrame(step)
    }
}


move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)