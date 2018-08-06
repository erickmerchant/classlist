const test = require('tape')
const classlist = require('./index.js')

test('index.js', (t) => {
  t.plan(8)

  t.equals(classlist('x-')([
    {
      'desktop-': {
        'margin-': [
          'top-1',
          'left-3'
        ],
        'active-': {
          'background-red': true,
          'background-blue': false
        }
      }
    },
    [
      'block',
      ['flex-auto', 'justify-around', ['align-right']],
      {
        'color-': 'red'
      }
    ]
  ]), 'x-desktop-margin-top-1 x-desktop-margin-left-3 x-desktop-active-background-red x-block x-flex-auto x-justify-around x-align-right x-color-red')

  t.equals(classlist('x-')({
    'desktop-': {
      'margin-': [
        'top-1',
        'left-3'
      ],
      'active-': {
        'background-red': true,
        'background-blue': false
      }
    }
  }), 'x-desktop-margin-top-1 x-desktop-margin-left-3 x-desktop-active-background-red')

  t.equals(classlist('x-')('block'), 'x-block')

  t.equals(classlist('x-')(true), 'x-')

  t.equals(classlist('x-')(false), '')

  t.equals(classlist('x-')(0), 'x-0')

  t.equals(classlist('x-')(10), 'x-10')

  t.equals(classlist('x-')(), '')
})
