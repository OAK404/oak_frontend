#' Organs available in shinybody
#'
#' A list of the organs that shinybody can display
#'
#' @format ## `shinybody_organs`
#' A data frame with 79 rows and 7 columns:
#' \describe{
#'   \item{organ}{The name of the organ the row describes (must be unique)}
#'   \item{male}{Boolean. TRUE if the body part can be shown on the male avatar,
#'   FALSE otherwise.}
#'   \item{female}{Boolean. TRUE if the body part can be shown on the female
#'   avatar, FALSE otherwise.}
#'   \item{show}{Boolean. TRUE if the body part should be shown, FALSE if it
#'   should be hidden.}
#'   \item{selected}{Boolean. TRUE if the body part should appear in a "selected"
#'   state, FALSE otherwise.}
#'   \item{hovertext}{A character column or a column containing `shiny.tag`
#' objects. This will be the contents of the tooltip that appears when the organ
#' is hovered over. If absent, the tooltip will contain the title-cased name of
#' the organ (underscores replaced with spaces).}
#'   \item{color}{A character column indicating the color the organ should appear
#'   if shown.}
#' }
"shinybody_organs"

#' Example data set of tumors
#'
#' A randomly generated dataset of tumors to use in examples
#'
#' @format ## `tumors`
#' A data frame with 39 rows and 5 columns:
#' \describe{
#'   \item{patient_id }{A unique patient identifier}
#'   \item{tumor_id}{A unique tumor identifier}
#'   \item{tumor_location}{The organ affected by the tumor}
#'   \item{is_primary_tumor}{TRUE if the tumor is the patient's primary cancer site, otherwise FALSE}
#'   \item{stage}{The stage of the tumor (I, II, or III)}
#' }
"tumors"

#' Example data set of patients
#'
#' A randomly generated dataset of patient details
#'
#' @format ## `patients`
#' A data frame with 16 rows and 5 columns:
#' \describe{
#'   \item{patient_id }{A unique patient identifier}
#'   \item{gender}{"male" or "female"}
#'   \item{age}{Patient age}
#'   \item{height}{Patient height in inches}
#'   \item{weight}{Patient weight in lbs}
#' }
"patients"
