import  Settings  from './js/settings';

import  Team  from './js/set';

import  Map  from './js/map';

import  Character  from './js/character';

import  Bowman  from './js/bowman';

import  Daemon  from './js/daemon';

import  Magician  from './js/magician';

import  Swordsman  from './js/swordsman';

import  Undead  from './js/undead';

import  Zombie  from './js/zombie';


const settings = new Settings();

settings.changeSetting('music', 'pop')

settings.changeSetting('difficulty', 'nightmare')

console.log(settings.settings);


