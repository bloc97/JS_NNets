var synaptic = require('synaptic'); // this line is not needed in the browser
var Neuron = synaptic.Neuron,
    Layer = synaptic.Layer,
    Network = synaptic.Network,
    Trainer = synaptic.Trainer,
    Architect = synaptic.Architect;


var demoNet = new Architect.Perceptron(2,3,1);

var demoTrainer = new Trainer(demoNet);

var trainXor = [
  {
    input: [0,0],
    output: [0]
  },
  {
    input: [0,1],
    output: [1]
  },
  {
    input: [1,0],
    output: [1]
  },
  {
    input: [1,1],
    output: [0]
  }
];

//console.log(demoTrainer.XOR());

console.log(demoTrainer.train(trainXor, {
    rate: 0.2,
    //iterations: 20000,
    //shuffle: true,
    //log: 1000,
    //cost: Trainer.cost.CROSS_ENTROPY,
    error: 0.005
}));

for (var i=0, j=trainXor.length; i<j; i++) {
    console.log(demoNet.activate(trainXor[i].input));
};