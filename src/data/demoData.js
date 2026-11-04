export const seedEquipment = [
  ['EQ-1042','Articulating boom lift','Genie Z-45/25','Lifts',185,'Available',92,'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=700&q=85'],
  ['EQ-1038','Mini excavator','CAT 302.7 CR','Earthmoving',240,'Rented',76,'https://images.unsplash.com/photo-1580901368919-7738efb0f87e?auto=format&fit=crop&w=700&q=85'],
  ['EQ-1031','Scissor lift','JLG 1932R','Lifts',95,'Available',88,'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=700&q=85'],
  ['EQ-1027','Plate compactor','Wacker Neuson DPU','Compaction',68,'Maintenance',24,'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=700&q=85'],
  ['EQ-1019','Skid steer loader','Bobcat S650','Earthmoving',210,'Available',94,'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=700&q=85'],
  ['EQ-1014','Towable light tower','Generac MLT6','Site utilities',75,'Rented',81,'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=700&q=85'],
  ['EQ-1008','Concrete mixer','Multiquip MC64','Concrete',55,'Available',67,'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=700&q=85'],
  ['EQ-1002','Telehandler','JCB 525-60','Lifts',285,'Available',98,'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=700&q=85'],
];

export const dateOffset = offset => { const date=new Date(); date.setDate(date.getDate()+offset); return date.toISOString().slice(0,10); };

export const seedBookings = [
  {id:'BK-2408',customer:'Northstar Construction',contact:'Olivia Rhye',equipment:'Mini excavator',code:'EQ-1038',start:dateOffset(-1),end:dateOffset(3),amount:1200,status:'Active'},
  {id:'BK-2407',customer:'Apex Build Co.',contact:'Phoenix Baker',equipment:'Towable light tower',code:'EQ-1014',start:dateOffset(-2),end:dateOffset(2),amount:375,status:'Active'},
  {id:'BK-2406',customer:'Brightview Landscapes',contact:'Lana Steiner',equipment:'Skid steer loader',code:'EQ-1019',start:dateOffset(1),end:dateOffset(4),amount:630,status:'Confirmed'},
  {id:'BK-2405',customer:'Crestline Projects',contact:'Demi Wilkinson',equipment:'Articulating boom lift',code:'EQ-1042',start:dateOffset(3),end:dateOffset(7),amount:925,status:'Confirmed'},
];

export const seedCustomers = [
  {name:'Northstar Construction',person:'Olivia Rhye',email:'olivia@northstar.example',phone:'(415) 555-0142',bookings:12,spent:18450,status:'Active'},
  {name:'Apex Build Co.',person:'Phoenix Baker',email:'phoenix@apexbuild.example',phone:'(415) 555-0128',bookings:8,spent:12380,status:'Active'},
  {name:'Brightview Landscapes',person:'Lana Steiner',email:'lana@brightview.example',phone:'(415) 555-0176',bookings:6,spent:8640,status:'Active'},
  {name:'Crestline Projects',person:'Demi Wilkinson',email:'demi@crestline.example',phone:'(415) 555-0183',bookings:4,spent:6210,status:'Active'},
  {name:'Urban Field Works',person:'Candice Wu',email:'candice@urbanfield.example',phone:'(415) 555-0111',bookings:3,spent:4120,status:'Prospect'},
];
