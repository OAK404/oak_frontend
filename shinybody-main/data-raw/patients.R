patients <- read.csv("data-raw/patients.csv", header = TRUE)

usethis::use_data(patients, overwrite = TRUE)
