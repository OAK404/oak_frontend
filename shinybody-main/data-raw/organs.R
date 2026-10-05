all_organs <- c(organ_to_id$male, organ_to_id$female[!organ_to_id$female %in% organ_to_id$male])
shinybody_organs <- data.frame(
  organ = names(all_organs),
  row.names = unname(all_organs)
)
# sort alphabetically
shinybody_organs <- shinybody_organs[order(shinybody_organs$organ), , drop = FALSE]
shinybody_organs$male <- shinybody_organs$organ %in% names(organ_to_id$male)
shinybody_organs$female <- shinybody_organs$organ %in% names(organ_to_id$female)
shinybody_organs$show <- FALSE
shinybody_organs$selected <- FALSE
shinybody_organs$hovertext <- shinybody_organs$organ
shinybody_organs$color <- "black"
usethis::use_data(shinybody_organs, overwrite = TRUE)
