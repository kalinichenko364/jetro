import {TimelineMax} from 'gsap';

let tl = new TimelineMax();

let obj = $('.js-logo');

tl.to(obj, 1, {x: 300, repeat:5, yoyo: true});
