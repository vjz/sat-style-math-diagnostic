export const QUESTIONS = [
  {id:'alg-1',topic:'Algebra',difficulty:1,q:'If 3x + 7 = 22, what is x?',choices:['3','5','7','9'],answer:1,explain:'Subtract 7 to get 3x = 15, so x = 5.'},
  {id:'alg-2',topic:'Algebra',difficulty:1,q:'A line has equation y = 2x - 5. What is y when x = 6?',choices:['7','9','12','17'],answer:0,explain:'Substitute x = 6: y = 12 - 5 = 7.'},
  {id:'alg-3',topic:'Algebra',difficulty:2,q:'If 4(x - 3) = 2x + 10, what is x?',choices:['5','8','11','14'],answer:2,explain:'4x - 12 = 2x + 10, so 2x = 22 and x = 11.'},
  {id:'alg-4',topic:'Algebra',difficulty:2,q:'Which expression is equivalent to 2(3a - 4) - (a + 5)?',choices:['5a - 13','5a + 1','7a - 13','6a - 9'],answer:0,explain:'Distribute: 6a - 8 - a - 5 = 5a - 13.'},
  {id:'alg-5',topic:'Algebra',difficulty:3,q:'If 2x + 3y = 19 and x - y = 2, what is x?',choices:['3','4','5','6'],answer:2,explain:'From x - y = 2, x = y + 2. Substitute: 2y + 4 + 3y = 19, y = 3, x = 5.'},
  {id:'alg-6',topic:'Algebra',difficulty:3,q:'For what value of k does the equation 5x + k = 2x + 18 have solution x = 4?',choices:['2','4','6','8'],answer:2,explain:'Plug in x = 4: 20 + k = 26, so k = 6.'},

  {id:'data-1',topic:'Data & Word Problems',difficulty:1,q:'A shirt originally costs $40 and is discounted 25%. What is the sale price?',choices:['$10','$25','$30','$35'],answer:2,explain:'25% of 40 is 10, so the sale price is 40 - 10 = 30.'},
  {id:'data-2',topic:'Data & Word Problems',difficulty:1,q:'The average of 6, 8, and 10 is:',choices:['7','8','9','10'],answer:1,explain:'(6 + 8 + 10) / 3 = 24 / 3 = 8.'},
  {id:'data-3',topic:'Data & Word Problems',difficulty:2,q:'A car travels 180 miles in 3 hours. At the same rate, how far will it travel in 5 hours?',choices:['240','270','300','360'],answer:2,explain:'Rate is 60 mph. In 5 hours, distance = 60 × 5 = 300.'},
  {id:'data-4',topic:'Data & Word Problems',difficulty:2,q:'In a class of 30 students, 18 play a sport. What percent play a sport?',choices:['40%','50%','60%','75%'],answer:2,explain:'18/30 = 0.60 = 60%.'},
  {id:'data-5',topic:'Data & Word Problems',difficulty:3,q:'A value increases by 20% and then decreases by 20%. Compared with the original value, the final value is:',choices:['4% lower','unchanged','4% higher','20% lower'],answer:0,explain:'1.2 × 0.8 = 0.96, so the result is 4% lower.'},
  {id:'data-6',topic:'Data & Word Problems',difficulty:3,q:'If 3 notebooks and 2 pens cost $13, and each notebook costs $3, what is the cost of one pen?',choices:['$1','$2','$3','$4'],answer:1,explain:'The notebooks cost 9, leaving 4 for 2 pens, so each pen costs 2.'},

  {id:'adv-1',topic:'Advanced Math',difficulty:1,q:'Which is equivalent to x² + 5x + 6?',choices:['(x + 1)(x + 6)','(x + 2)(x + 3)','(x - 2)(x - 3)','(x + 5)(x + 1)'],answer:1,explain:'The numbers 2 and 3 multiply to 6 and add to 5.'},
  {id:'adv-2',topic:'Advanced Math',difficulty:1,q:'If f(x) = x² - 1, what is f(4)?',choices:['7','13','15','17'],answer:2,explain:'f(4) = 16 - 1 = 15.'},
  {id:'adv-3',topic:'Advanced Math',difficulty:2,q:'The solutions to x² - 9 = 0 are:',choices:['0 and 9','-3 and 3','3 only','-9 and 9'],answer:1,explain:'x² = 9, so x = -3 or x = 3.'},
  {id:'adv-4',topic:'Advanced Math',difficulty:2,q:'If (x + 4)(x - 1) = 0, what is the positive solution?',choices:['-4','-1','1','4'],answer:2,explain:'Set each factor to zero: x = -4 or x = 1.'},
  {id:'adv-5',topic:'Advanced Math',difficulty:3,q:'For y = x² - 6x + 8, what is the y-coordinate of the vertex?',choices:['-1','0','1','8'],answer:0,explain:'The vertex x-value is -b/(2a)=3. y = 9 - 18 + 8 = -1.'},
  {id:'adv-6',topic:'Advanced Math',difficulty:3,q:'If 2^(x+1) = 16, what is x?',choices:['2','3','4','5'],answer:1,explain:'16 = 2^4, so x + 1 = 4 and x = 3.'},

  {id:'geo-1',topic:'Geometry & Trig',difficulty:1,q:'A rectangle has length 9 and width 4. What is its area?',choices:['13','26','36','40'],answer:2,explain:'Area = length × width = 9 × 4 = 36.'},
  {id:'geo-2',topic:'Geometry & Trig',difficulty:1,q:'A right triangle has legs 6 and 8. What is the hypotenuse?',choices:['10','12','14','16'],answer:0,explain:'6-8-10 is a Pythagorean triple.'},
  {id:'geo-3',topic:'Geometry & Trig',difficulty:2,q:'The radius of a circle is 5. What is its circumference?',choices:['5π','10π','25π','50π'],answer:1,explain:'Circumference = 2πr = 10π.'},
  {id:'geo-4',topic:'Geometry & Trig',difficulty:2,q:'Two angles in a triangle measure 35° and 65°. What is the third angle?',choices:['70°','75°','80°','90°'],answer:2,explain:'Triangle angles sum to 180°, so third angle = 180 - 100 = 80°.'},
  {id:'geo-5',topic:'Geometry & Trig',difficulty:3,q:'A 30-60-90 triangle has shortest side 7. What is the hypotenuse?',choices:['7√3','14','21','14√3'],answer:1,explain:'In a 30-60-90 triangle, hypotenuse = 2 × shortest side = 14.'},
  {id:'geo-6',topic:'Geometry & Trig',difficulty:3,q:'A cylinder has radius 3 and height 10. What is its volume?',choices:['30π','60π','90π','300π'],answer:2,explain:'Volume = πr²h = π × 9 × 10 = 90π.'}
];

export function makeTest(count = 15) {
  const byTopic = Object.groupBy ? Object.groupBy(QUESTIONS, x => x.topic) : QUESTIONS.reduce((a,q)=>((a[q.topic]??=[]).push(q),a),{});
  const selected = [];
  for (const topic of Object.keys(byTopic)) {
    selected.push(...byTopic[topic].slice(0, 3));
  }
  const remaining = QUESTIONS.filter(q => !selected.includes(q));
  selected.push(...remaining.sort((a,b)=>b.difficulty-a.difficulty).slice(0, Math.max(0, count-selected.length)));
  return selected.slice(0, count).sort((a,b)=>a.difficulty-b.difficulty || a.topic.localeCompare(b.topic));
}
