require 'sass'
require 'uglifier'

JS_PATH = './js'
SASS_PATH = './sass'
BUILD_PATH = './assets'

desc 'Build coffee script and sass'
task :build do

  Dir.mkdir(BUILD_PATH) unless File.exists?(BUILD_PATH)

  min = Uglifier.new.compile(File.read("#{JS_PATH}/script.js"))

  File.open("#{BUILD_PATH}/app.js", 'w+') { |f| f.write(min) }

  # Compile sass files
  `sass -t compressed #{SASS_PATH}/style.sass #{BUILD_PATH}/app.css`
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
