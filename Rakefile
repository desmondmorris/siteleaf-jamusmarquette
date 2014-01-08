require 'sass'
require 'uglifier'
require 'siteleaf'

JS_PATH = './js'
SASS_PATH = './sass'
BUILD_PATH = './assets'

namespace :jm do

  desc 'Build coffee script and sass'
  task :build do
    puts 'Uglifying javascript'
    Dir.mkdir(BUILD_PATH) unless File.exists?(BUILD_PATH)
    min = Uglifier.new.compile(File.read("#{JS_PATH}/script.js"))
    File.open("#{BUILD_PATH}/app.js", 'w+') { |f| f.write(min) }

    puts 'Converting sass files'
    `sass -t compressed #{SASS_PATH}/style.sass #{BUILD_PATH}/app.css`
  end

  desc 'deploy'
  task :deploy do

    Rake::Task['jm:build'].execute

    puts 'Pushing theme'
    `siteleaf push theme -y`
  end

  desc 'Remove all files in the build directory'
  task :clean do
    Dir.foreach(BUILD_PATH) do |f|
      # Individual compiled files
      unless File.directory?(f)
        File.delete(File.join(BUILD_PATH, f))
      end
    end
  end

end
