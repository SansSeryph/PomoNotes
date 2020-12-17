# PomoNotes

This app is a Pomodoro timer similar to the [Tomato Timer](https://tomato-timer.com/) with the addition that you can add notes to what you were doing with each timer.

The tools used for this project is Rails for the backend and React for the frontend.

## Development Setup

*Note: There isn't a database step required at this point in time as it's not being used.*

1. Clone the repo into your workspace
1. `cd` into the project root
1. If it isn't already, install Ruby version 2.7.2 on your machine. It's highly recommended to use a version manager such as [RVM](https://rvm.io/) or [RBenv](https://github.com/rbenv/rbenv) to do this.
1. Download package dependencies from both Bundler and Yarn using their respective commands:
   * Bundler (included with Ruby): `bundle`
   * Yarn: `yarn`
1. Run both the Rails and Webpack servers:
   * Rails: `bundle exec rails server`
   * Webpack: `bundle exec bin/webpack-dev-server`
1. Open the browser to [localhost:3000](localhost:3000) and make sure you see the app.

## Test Suite

The suite is comprised of the following tools:

* [RSpec](https://github.com/rspec/rspec-rails) as the main testing platform
* [Capybara](https://github.com/teamcapybara/capybara) to drive the browser

Ways you can run tests:

* To run the full test suite: `bundle exec rspec`
* To run a file: `bundle exec rspec path/to/your/file_spec.rb`
  * For example: `bundle exec rspec spec/features/timer_spec.rb`
* To run a specific example(s) within a file, include a colon with the line number of the block of code you want to run.
  * It can be a specific test (`scenario` or `it` block) or a set of tests (`describe` or `context` block).
    * Ex: `bundle exec rspec spec/features/timer_spec.rb:23`
