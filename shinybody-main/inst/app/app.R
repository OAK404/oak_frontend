library(shiny)
library(shinybody)

ui <- function() {
  fluidPage(
    tags$head(
    tags$style(HTML("
        body {
          font-family: 'Roboto', Arial, sans-serif;
          background-color: #f7f7f7;
          margin: 0;
          padding: 20px;
        }
        .container {
          background-color: #ffffff;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
          margin-bottom: 20px;
        }
        h2, h3 {
          color: #2c3e50;
          font-weight: bold;
        }
        label {
          font-weight: bold;
          color: #34495e;
        }
      "))
    ),
    div(
      class = "container",
      h2("Patient Selection"),
      div(
        style = "width: 100%; max-width: 400px;",
        selectInput(
          inputId = "select_patient",
          label = "Select a Patient",
          choices = patients$patient_id,
          multiple = FALSE,
          selected = patients$patient_id[1]
        )
      )
    ),
    div(
      class = "container",
      h2("Patient Information"),
      uiOutput("patient_info")
    ),
    div(
      class = "container",
      h2("Human Body Viewer"),
      humanOutput(outputId = "human")
    ),
    div(
      class = "container",
      h2("Selected Organ Data"),
      uiOutput("selected_organ_data")
    )
  )
}

server <- function(input, output, session) {
  patient_tumors <- reactive({
    tumors[tumors$patient_id == input$select_patient,]
  })
  patient_info <- reactive({
    patients[patients$patient_id == input$select_patient,]
  })

  output$human <- renderHuman({
    g <- patient_info()$gender
    primary_tumor <- patient_tumors()$tumor_location[patient_tumors()$is_primary_tumor]
    metastases <- unique(patient_tumors()$tumor_location[!patient_tumors()$is_primary_tumor])
    patient_organ_df <- subset(shinybody::shinybody_organs, organ %in% c(primary_tumor, metastases))
    patient_organ_df$show <- TRUE
    patient_organ_df$color <- ifelse(patient_organ_df$organ == primary_tumor, "red", "blue")
    patient_organ_df$hovertext <- ifelse(patient_organ_df$organ == primary_tumor, "Primary Tumor", "Metastasis")
    patient_organ_df$selected[patient_organ_df$organ == primary_tumor] <- TRUE
    human(
      gender = g,
      organ_df = patient_organ_df,
      select_color = "yellow"
    )
  })

  output$patient_info <- renderUI({
    info <- patient_info()
    if (nrow(info) == 0) {
      return(div(class = "info-box", p("No patient information available.")))
    }
    exclude_cols <- c("patient_id")
    info <- info[ ,!(names(info) %in% exclude_cols), drop = FALSE]

    div(
      class = "info-box",
      style = "margin-top: 20px; padding: 15px; border: 1px solid #ddd; border-radius: 8px; background-color: #f9f9f9; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);",
      lapply(1:ncol(info), function(i) {
        column_name <- tools::toTitleCase(colnames(info)[i])
        value <- info[[1, i]]

        div(
          style = "display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;",
          h4(
            style = "margin: 0; color: #2c3e50; font-size: 16px; font-weight: bold;",
            paste(column_name, ":")
          ),
          p(
            style = "margin: 0; font-size: 14px; color: #7f8c8d;",
            value
          )
        )
      })
    )
  })

  output$selected_organ_data <- renderUI({
    req(input$select_patient)
    selected_parts <- input$selected_body_parts
    if (length(selected_parts) == 0) {
      return(p("No organs selected."))
    }

    filtered_data <- patient_tumors()[patient_tumors()$tumor_location %in% input$selected_body_parts, ]
    selected_body_parts_ui <- tagList()
    for (i in seq_len(nrow(filtered_data))) {
      tumor_loc <- filtered_data$tumor_location[i]
      is_primary <- filtered_data$is_primary_tumor[i]
      stage <- filtered_data$stage[i]
      risk_level <- switch(
        EXPR = stage,
        "I" = strong("Low", style = "color: #2ecc71"),
        "II" = strong("Medium", style = "color: #f39c12"),
        "III" = strong("High", style = "color: #e74c3c")
      )

      infobox <- wellPanel(
        fluidRow(column(12,
          strong("Tumor Location:"),
          p(tumor_loc),
          style = "display: flex; justify-content: space-between; align-items: center;",
        )),
        fluidRow(column(12,
          strong("Is Primary Tumor:"),
          p(ifelse(is_primary, "True", "False")),
          style = "display: flex; justify-content: space-between; align-items: center;",
        )),
        fluidRow(column(12,
          strong("Stage:"),
          p(stage),
          style = "display: flex; justify-content: space-between; align-items: center;",
        )),
        fluidRow(column(12,
          strong("Risk Level:"),
          risk_level,
          style = "display: flex; justify-content: space-between; align-items: center;",
        ))
      )
      selected_body_parts_ui[[length(selected_body_parts_ui) + 1]] <- infobox
    }

    selected_body_parts_ui
  })
}

shinyApp(ui = ui, server = server)
