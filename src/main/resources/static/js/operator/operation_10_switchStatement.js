// 10. Switch statement
// 여러개의 elseif 문을 사용할 때는 switch 가 좋다

const browser = 'IE';

switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}