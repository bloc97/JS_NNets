var synaptic = require('synaptic'); // this line is not needed in the browser
var Neuron = synaptic.Neuron,
    Layer = synaptic.Layer,
    Network = synaptic.Network,
    Trainer = synaptic.Trainer,
    Architect = synaptic.Architect;


var inNet = new Architect.Perceptron(5,20,10,5);
var inTrainer = new Trainer(inNet);

var outNet = new Architect.Perceptron(5,20,10,5);
var outTrainer = new Trainer(outNet);

var createTrainIn = function() {
    var array = [];
    
    for (var i=0; i<2000; i++) {
        array[i] = {};
        array[i].input = [];
        array[i].output = [];
        for (var j=0; j<5; j++) {
            var char = Math.floor(Math.random()*1000)/1000;
            array[i].input.push(char);
        }
//        array[i].output[0]=array[i].input[2]/3;
//        array[i].output[1]=array[i].input[4]/2+0.1;
//        array[i].output[2]=array[i].input[1]/6;
//        array[i].output[3]=array[i].input[0]/4+0.3;
//        array[i].output[4]=array[i].input[3]/5;
        array[i].output[0]=array[i].input[2];
        array[i].output[1]=array[i].input[4];
        array[i].output[2]=array[i].input[1];
        array[i].output[3]=array[i].input[0];
        array[i].output[4]=array[i].input[3];
    }
    return array;
};

var createTrainOut = function(arrayin) {
    var array = [];
    
    for (var i=0; i<2000; i++) {
        array[i] = {};
        array[i].input = [];
        array[i].output = [];
        for (var j=0; j<5; j++) {
            array[i].input.push(arrayin[i].output[j]);
            array[i].output.push(arrayin[i].input[j]);
        }
        
    }
    return array;
};
//console.log(demoTrainer.XOR());

var trainIn = createTrainIn();
var trainOut = createTrainOut(trainIn);

console.log(trainIn[0]);
console.log(trainOut[0]);

console.log(inTrainer.train(trainIn, {
    rate: 0.004,
    //iterations: 20000,
    shuffle: true,
    log: 1000,
    //cost: Trainer.cost.CROSS_ENTROPY,
    error: 0.0005
}));

console.log(outTrainer.train(trainOut, {
    rate: 0.004,
    //iterations: 20000,
    shuffle: true,
    log: 1000,
    //cost: Trainer.cost.CROSS_ENTROPY,
    error: 0.0005
}));

//
//for (var i=0, j=trainXor.length; i<j; i++) {
//    console.log(demoNet.activate(trainXor[i].input));
//};
var verif = [0.4,0.2,0.8,0.1,0.3];
console.log(verif);
var verifin = inNet.activate(verif);
console.log(verifin);
var verifout = outNet.activate(verifin);
console.log(verifout);