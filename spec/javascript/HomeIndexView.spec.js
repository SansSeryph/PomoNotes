import HomeIndexView from 'components/HomeIndexView';

test('successfully constructs an object', () => {
    const view = new HomeIndexView();
    expect(view).not.toBeNull();
});