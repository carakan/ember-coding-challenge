export default function() {
  // this.namespace = '';
  this.timing = 400;

  //this.get('/contacts');

  this.get('/contacts', function (db, request) {
    let contacts = [];
    console.log(request.queryParams, 'query search');
    if (Object.keys(request.queryParams).length === 0) {
      contacts = db.contacts.all();
    } else {
      const filter = request.queryParams.search;
      console.log(filter);
      contacts = db.contacts.where(function(contact){
        return (contact.firstName.indexOf(filter) !== -1 ||
                contact.lastName.indexOf(filter) !== -1 );
      });
    }
    return contacts;
  });


  this.get('/contacts/:id');
  this.post('/contacts');
  this.patch('/contacts/:id');
  this.del('/contacts/:id');
}
