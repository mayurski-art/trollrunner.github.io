const KEY = "troll_runner_data";

function getData(){
  return JSON.parse(localStorage.getItem(KEY)) || [];
}

function saveDrop(drop){
  const data = getData();
  data.push(drop);
  localStorage.setItem(KEY, JSON.stringify(data));
}
