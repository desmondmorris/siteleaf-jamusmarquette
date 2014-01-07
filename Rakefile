require 'sass'
require 'uglifier'

BUILD_PATH = './assets'

desc 'Build coffee script and sass'
task :build do
  # Compile coffeescript
  `coffee -b --output #{BUILD_PATH} --compile ./coffee`

  min = Uglifier.new.compile(File.read("#{BUILD_PATH}/script.js"))

  File.open("#{BUILD_PATH}/app.js", 'w') { |f| f.write(min) }

  File.delete(BUILD_PATH + '/script.js')

  # Compile sass files
  `sass -t compressed sass/style.sass #{BUILD_PATH}/app.css`
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
