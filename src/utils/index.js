/* eslint-disable import/no-anonymous-default-export */
function compareTitle( a, b ) {
    const titleA = a["title"].toLowerCase();
    const titleB = b["title"].toLowerCase()
  
    if ( titleA < titleB ){
      return -1;
    }
    if ( titleA > titleB ){
      return 1;
    }
    return 0;
  }
  
  function comparePriority( a, b ) {
    if ( a["priority"] < b["priority"] ){
      return -1;
    }
    if ( a["priority"] > b["priority"] ){
      return 1;
    }
    return 0;
  }
export const orderByTitle = (group)=>{
    for(let key in group){
      let arr = group[key];
      arr.sort(compareTitle);
      group[key] = arr;
      // console.log(key , group[key]);
    }
  
    return group;
  }
  
export const orderByPriority = (group)=>{
    for(let key in group){
      group[key].sort(comparePriority);
    }
    return group;
  }
  
export const groupByStatus = (data)=>{
    let groupsS = {};
  
    let tickets = data["tickets"];
    let users = data["users"];
  
    let us = {};
    for(let i=0;i<users.length;i++){
      let id = users[i]["id"];
  
      us[id] = users[i];
    }
  
    for(let i=0;i<tickets.length;i++){
      let userId = tickets[i]["userId"];
      tickets[i]["userName"] = us[userId]["name"];
      tickets[i]["userAvb"] = us[userId]["available"];
    }
    
    for(let i=0;i<tickets.length;i++){
      let status = tickets[i]["status"];
      groupsS[status] = [];
    }
    for(let i=0;i<tickets.length;i++){
      let status = tickets[i]["status"];
      groupsS[status].push(tickets[i]);
    }
    return groupsS;
  };
export const groupByUser = (data)=>{
    let groupsU = {};
  
    let tickets = data["tickets"];
    let users = data["users"];
  
    let us = {};
    for(let i=0;i<users.length;i++){
      let id = users[i]["id"];
  
      us[id] = users[i];
    }
  
    for(let i=0;i<tickets.length;i++){
      let userId = tickets[i]["userId"];
      tickets[i]["userName"] = us[userId]["name"];
      tickets[i]["userAvb"] = us[userId]["available"];
    }
  
    for(let i=0;i<tickets.length;i++){
      let user = tickets[i]["userId"];
      groupsU[user] = [];
    }
    for(let i=0;i<tickets.length;i++){
      let user = tickets[i]["userId"];
      groupsU[user].push(tickets[i]);
    }
    // console.log(groupsU)
    return groupsU;
  };
export const groupByPriority = (data)=>{
    let groupsP = {};
  
    let tickets = data["tickets"];
    let users = data["users"];
  
    let us = {};
    for(let i=0;i<users.length;i++){
      let id = users[i]["id"];
  
      us[id] = users[i];
    }
  
    for(let i=0;i<tickets.length;i++){
      let userId = tickets[i]["userId"];
      tickets[i]["userName"] = us[userId]["name"];
      tickets[i]["userAvb"] = us[userId]["available"];
    }
  
    for(let i=0;i<tickets.length;i++){
      let priority = tickets[i]["priority"];
      groupsP[priority] = [];
    }
    for(let i=0;i<tickets.length;i++){
      let priority = tickets[i]["priority"];
      groupsP[priority].push(tickets[i]);
    }
    // console.log(groupsP);
    return groupsP;
  };