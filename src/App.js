
import './App.css';

const Jerry = [
  {
    name: 'Jerry',
    age: 12,
  },
];

const Aaron = [
  {
    name: 'Aaron',
    age: 11,
  },
];

const Jack = [
  {
    name: 'Jack',
    age: 13,
  },
];

const Aiden = [
  {
    name: 'Aiden',
    age: 10,
  },
];

const Eric = [
  {
    name: 'Eric',
    age: 11,
  },
];

const Angelo = [
  {
    name: 'Angelo',
    age: 12,
  },
];

const Banana1 = [
  {
    name: 'Banana1',
    age: 12,
  },
];

const Banana2 = [
  {
    name: 'Banana2',
    age: 12,
  },
];

const Banana3 = [
  {
    name: 'Banana3',
    age: 12,
  },
];
function App() { 
  return (
    <div className='App'>
      <h1>Jerry</h1>
      {Jerry.map((v, i) => (
       <Card name={v.name} age={v.age} key={i} />
      ))}
    <img src="https://th.bing.com/th/id/OIP.uTYylcQG5H8NwHAKG5ediwAAAA?pid=ImgDetrs=1"></img>
      <h1>Aaron</h1>
      {Aaron.map((v, i) => (
       <Card name={v.name} age={v.age} key={i} />
      ))}
    <img src="https://dyom.gtagames.nl/avatars/avatar2736.png"></img>
    <h1>Jack</h1>
      {Jack.map((v, i) => (
       <Card name={v.name} age={v.age} key={i} />
      ))}
    <img src="https://i.pinimg.com/originals/10/07/5b/10075bbdaa421c446ce6a633d1556e29.png"></img>
    <h1>Aiden</h1>
      {Aiden.map((v, i) => (
       <Card name={v.name} age={v.age} key={i} />
      ))}
    <img src="https://i.pinimg.com/originals/f1/3b/56/f13b56a29473f600e153708b5b819557.png"></img>
    <h1>Eric</h1>
      {Eric.map((v, i) => (
       <Card name={v.name} age={v.age} key={i} />
      ))}
    <img src="https://avatars1.githubusercontent.com/u/58620359?s=400v=4"></img>
    <h1>Angelo</h1>
      {Angelo.map((v, i) => (
       <Card name={v.name} age={v.age} key={i} />
      ))}
    <img src="https://th.bing.com/th/id/OIP.iqx5j9gbWVX2WZQN_FM0qgAAAA?pid=ImgDet&rs=1"></img>
    <h1>Banana1</h1>
      {Banana1.map((v, i) => (
       <Card name={v.name} age={v.age} key={i} />
      ))}
    <img src="https://yermama.webs.com/photos/Click-on-the-Picture-/dancingbanana.gif"></img>
    <h1>Banana2</h1>
      {Banana2.map((v, i) => (
       <Card name={v.name} age={v.age} key={i} />
      ))}
    <img src="https://th.bing.com/th/id/OIP.RTdpjsyiNuHfC6diRMUN8QAAAA?pid=ImgDet&rs=1"></img>
    <h1>Banana3</h1>
      {Banana3.map((v, i) => (
       <Card name={v.name} age={v.age} key={i} />
      ))}
    <img src="https://th.bing.com/th/id/OIP.kLKXSYwNgfs9BjymNDzlZwHaGz?pid=ImgDet&rs=1"></img>
    </div>
  );

}

const Card = ({ name, age }) => {
  return (
    <div className='card'>
      <p>
        This is {name}'s card, he is {age} years old
      </p>
    </div>
  );
};


export default App;