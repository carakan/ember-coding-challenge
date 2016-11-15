import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    destroy(){
      if (confirm("Want to delete?")) {
        this.get("model").destroyRecord().then(()=>{
          this.transitionToRoute('contacts');
        });
      }
    }
  }
});
