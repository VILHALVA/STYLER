const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const SCREEN_WIDTH = canvas.width;
const SCREEN_HEIGHT = canvas.height;

const GREEN = '#00FF00';
const BLUE = '#0000FF';
const RED = '#FF0000';
const BLACK = '#000000';

let ball_x = SCREEN_WIDTH / 2;
let ball_y = SCREEN_HEIGHT / 2;
const ball_size = 20;
let ball_speed_x = 3;
let ball_speed_y = 3;

let player_x = SCREEN_WIDTH / 2;
let player_y = SCREEN_HEIGHT - 100;
let player_size = 40;
const player_speed = 5;

let enemy_x = SCREEN_WIDTH / 2;
let enemy_y = SCREEN_HEIGHT / 2;
const enemy_size = 60;
let enemy_speed_x = 7;
let enemy_speed_y = 7;

const ball_growth = -2;
const clockInterval = 1000 / 60;

const keys = {};

window.addEventListener('keydown', (e) => keys[e.key] = true);
window.addEventListener('keyup', (e) => keys[e.key] = false);

function draw() {
    ctx.fillStyle = BLACK;
    ctx.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

    ctx.fillStyle = GREEN;
    ctx.beginPath();
    ctx.arc(ball_x, ball_y, ball_size / 2, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = BLUE;
    ctx.fillRect(player_x - player_size / 2, player_y - player_size / 2, player_size, player_size);

    ctx.fillStyle = RED;
    ctx.fillRect(enemy_x - enemy_size / 2, enemy_y - enemy_size / 2, enemy_size, enemy_size);
}

function update() {
    ball_x += ball_speed_x;
    ball_y += ball_speed_y;

    if (ball_y + ball_size / 2 > SCREEN_HEIGHT || ball_y - ball_size / 2 < 0) {
        ball_speed_y = -ball_speed_y;
    }
    if (ball_x + ball_size / 2 > SCREEN_WIDTH || ball_x - ball_size / 2 < 0) {
        ball_speed_x = -ball_speed_x;
    }

    if (ball_x + ball_size / 2 > player_x - player_size / 2 &&
        ball_x - ball_size / 2 < player_x + player_size / 2 &&
        ball_y + ball_size / 2 > player_y - player_size / 2 &&
        ball_y - ball_size / 2 < player_y + player_size / 2) {
        
        ball_x = SCREEN_WIDTH / 2;
        ball_y = SCREEN_HEIGHT / 2;
        player_size += 8.5;
        enemy_speed_x += 2.5;
        enemy_speed_y += 2.5;

        if (player_size >= 200) {
            player_size = 200;
        }
    }

    enemy_x += enemy_speed_x;
    enemy_y += enemy_speed_y;

    if (enemy_x + enemy_size / 2 > SCREEN_WIDTH || enemy_x - enemy_size / 2 < 0) {
        enemy_speed_x = -enemy_speed_x;
    }
    if (enemy_y + enemy_size / 2 > SCREEN_HEIGHT || enemy_y - enemy_size / 2 < 0) {
        enemy_speed_y = -enemy_speed_y;
    }

    if (player_x + player_size / 2 > enemy_x - enemy_size / 2 &&
        player_x - player_size / 2 < enemy_x + enemy_size / 2 &&
        player_y + player_size / 2 > enemy_y - enemy_size / 2 &&
        player_y - player_size / 2 < enemy_y + enemy_size / 2) {
        
        player_size += ball_growth;
        if (player_size <= 10) {
            player_size = 10;
        }
    }

    if (keys['ArrowUp']) player_y -= player_speed;
    if (keys['ArrowDown']) player_y += player_speed;
    if (keys['ArrowLeft']) player_x -= player_speed;
    if (keys['ArrowRight']) player_x += player_speed;

    if (player_x < player_size / 2) player_x = player_size / 2;
    if (player_x > SCREEN_WIDTH - player_size / 2) player_x = SCREEN_WIDTH - player_size / 2;
    if (player_y < player_size / 2) player_y = player_size / 2;
    if (player_y > SCREEN_HEIGHT - player_size / 2) player_y = SCREEN_HEIGHT - player_size / 2;
}

function gameLoop() {
    update();
    draw();
    setTimeout(gameLoop, clockInterval);
}

gameLoop();
