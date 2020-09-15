export default class RockPaperScissors extends Component {
  constructor(props) {
    super(props)
    this.state= 
    {
      user: null,
      computer: ['rock', 'paper', 'scissors'],
      computerPlay: null
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick = (e) =>
  {
    this.setState(
      {
        [e.target.name]: e.target.value,
        computerPlay: this.state.computer[Math.floor(Math.random()*this.state.computer.length)]
      })
      return(this.state)
  }
}


/* let rock = document.getElementById('rock')
let paper = document.getElementById('paper')
let scissors = document.getElementById('scissors')

getUserPlay = () => {
  if (rock.onclick) {
    return "rock";
  } else if (paper.onclick) {
    return "paper";
  } else {
    scissors.onclick;
    return "scissors";
  }
};

getComputerPlay = () => {
  randomPlay = Math.floor(Math.random() * 3);
  switch (randomPlay) {
    case 0:
      return "computerRock";
      break;

    case 1:
      return "computerPaper";
      break;

    case 2:
      return "computerScissors";
      break;
  }
};

const determineWinner = (user, computer) => {
  if (user === computer) {
    return "tie";
  } else if (user === "rock" && computer === "computerPaper") {
    return "computer won, try again";
  } else if (user === "paper" && computer === "computerScissors") {
    return "computer won, try again";
  } else if (user === "scissors" && computer === "computerRock") {
    return "computer won, try again";
  } else {
    return "You won!";
  }
};

const play = (user, computer) => {
  const user = getUserPlay();
  const computer = getComputerPlay();
};
play(user, computer); */