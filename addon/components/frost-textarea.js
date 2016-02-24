import Ember from 'ember'
import _ from 'lodash/lodash'

export default Ember.TextArea.extend({
  classNames: ['frost-textarea'],

  oninput: Ember.on('input', function () {
    if (_.isFunction(this.attrs['on-input'])) {
      Ember.run.next(this, function () {
        this.attrs['on-input']({
          id: this.get('id'),
          value: this.get('value')
        })
      })
    }
  })
})
