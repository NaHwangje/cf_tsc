/**
 * Class 선언하기
 */

class SampleClass{}

class Game {
name:string;
contry:string;
download: number;
    constructor(name:string, contry:string, download:number) {
        this.name = name;
        this.contry= contry;
        this.download = download
    }

    introduce(){
        return `${this.name}은 ${this.contry}에서 제작된 ${this.download}개의 다운로드를 달성한 게임입니다.`
    }
}

const starcraft = new Game(
    'Start Craft',
    'USA',
    10000000,
    // true,
)

const retVal = starcraft.introduce();