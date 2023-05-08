import betMan from '../assets/bet-man.png'
import superMan from '../assets/super-man.png'

export interface IHeros{
    name: string;
    power: string;
    intellect: string;
    description: string;
    image: string;
}

export const heros: IHeros[] = [
    {
        name: 'Bat-man',
        power: '999',
        intellect: '999',
        description: 'Бетман летучая мышь, умный, сильный, богатый. на самом деле это Брюс Уэйн',
        image: betMan
    },
    {
        name: 'Super-man',
        power: '999',
        intellect: '20',
        description: 'Супер мен, сильный но тупой мужик в легинсах, может умереть от камушка',
        image: superMan
    },
    {
        name: 'Super-man',
        power: '999',
        intellect: '20',
        description: 'Супер мен, сильный но фысыфс фысысфыс фысфысыф фысфысфыс ыфсфысыс фысфысыфс фысфысфы фысфысфыс фысфысфы ыфыфыфа фыафыаыфа фыфыаа фыаыфа фыаыфаыфа Бетман летучая мышь, умный, сильный, богатый. на самом деле это Брюс Уэйнтупой мужик в легинсах, может умереть от камушка',
        image: superMan
    },
    {
        name: 'Bat-man',
        power: '999',
        intellect: '999',
        description: 'Бетман  asdas ds ad asd sd asd asd as das dasd as das das das das летучая мсысфыс фысфысыф фысфысфыс ыфсфысыс фысфысыфс фысфысфы фысысфыс фысфысыф фысфысфыс ыфсфысыс фысфысыфс фысфысфы фысысфыс фысфысыф фысфысфыс ыфсфысыс фысфысыфс фысфысфы фыышь, умный, сильный, богатый. на самом деле это Брюс Уэйн',
        image: betMan
    },
]
