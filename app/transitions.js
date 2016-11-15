export default function(){
  this.transition(
    this.fromRoute('contacts.index'),
    this.use('toRight'),
    this.reverse('toLeft')
  );
  this.transition(
    this.fromRoute('contacts.contact.show'),
    this.toRoute('contacts.contact.edit'),
    this.use('toUp'),
    this.reverse('toDown')
  );
}
