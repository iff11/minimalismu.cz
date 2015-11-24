import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('x-portfolio', 'Integration | Component | x portfolio', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{x-portfolio}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#x-portfolio}}
      template block text
    {{/x-portfolio}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
