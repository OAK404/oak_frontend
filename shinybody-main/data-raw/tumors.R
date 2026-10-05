tumors <- read.csv("data-raw/tumors.csv", header = TRUE)
tumors$is_primary_tumor <- as.logical(tumors$is_primary_tumor)
usethis::use_data(tumors, overwrite = TRUE)
