import Ember from 'ember';

export default Ember.Controller.extend({
  newModel: {},
  actions: {
    save(){
      let model = this.store.createRecord('contact', this.get("newModel"));
      this.set("newModel", {});
      model.save().then(()=>{
        this.transitionToRoute('contacts.contact.show', model);
      });
    }
  }
});
