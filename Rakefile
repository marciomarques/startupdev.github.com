task :deploy do
  server = "railsapp@208.53.44.221"
  deploy_dir = "~/startupdev.com.br"

  system("cp .htaccess _site/")
  system("rsync -av --delete-excluded _site/ #{server}:#{deploy_dir}")
  system(%{ssh #{server} "find #{deploy_dir} -type f -print0 | xargs -0 chmod 644"})
end
