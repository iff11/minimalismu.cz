export default function () {
  this.transition(
    this.fromRoute('home'),
    this.toRoute('contact'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('home'),
    this.toRoute('item'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
