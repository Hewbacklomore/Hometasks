'use strict';

 (function () {

  const player1 = { id: 1, name: 'Иван', level: 10 };
  const player2 = { id: 2, name: 'Oleg', level: 9 };
  const player3 = { id: 3, name: 'Giorgi', level: 13 };


  function addPlayerToLevelSet(member) {

    const mapMember = new WeakSet();

    if(member.level >= 10) {
        return (!mapMember.has(member))? mapMember.add(member) : 'there is no nothing in WeakSet'
    }
        return 'level of the members is too small to participiate in this game'

  }

  const result = addPlayerToLevelSet(player1); 
  const result1 = addPlayerToLevelSet(player2); 
  const result2 = addPlayerToLevelSet(player3); 
  console.log(result);
  console.log(result1);
  console.log(result2);
 
}()) 
