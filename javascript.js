/*Blog Functionality*/
const iframe_blog_display = document.getElementById('iframe_blog_display')
const button_blogpost1 = document.getElementById('BlogPost1')
const button_blogpost2 = document.getElementById('BlogPost2')

button_blogpost_1.onclick = function() {
    iframe_blog_display.src = "Blog1_2020Inflation.html"
}
button_blogpost_2.onclick = function() {
    iframe_blog_display.src = 'Blog2_Vectors.html'
}

/*Open buttons*/
const container_modal_projects = document.getElementById('container_modal_projects');
const button_projects_open = document.getElementById('button_projects_open');

button_projects_open.onclick = function () {
    container_modal_projects.style.display = "block";
}

/*Close button*/
const button_projects_close = document.getElementById('button_projects_close')

button_projects_close.onclick = function () {
    container_modal_projects.style.display = "none";
}


/*Modal Categories*/
const button_modal_data = document.getElementById('button_modal_data');
const button_modal_policy = document.getElementById('button_modal_policy');
const button_modal_documents = document.getElementById('button_modal_documents');

const wrapper_data_projects = document.getElementById('wrapper_data_projects');
const wrapper_policy_projects = document.getElementById('wrapper_policy_projects');
const wrapper_documents = document.getElementById('wrapper_documents');

button_modal_data.onclick = function() {
    wrapper_data_projects.style.display = "block";
    wrapper_policy_projects.style.display = "none";
    wrapper_documents.style.display = "none";
}

button_modal_policy.onclick = function() {
    wrapper_data_projects.style.display = "none";
    wrapper_policy_projects.style.display = "block";
    wrapper_documents.style.display = "none";
}

button_modal_documents.onclick = function() {
    wrapper_data_projects.style.display = "none";
    wrapper_policy_projects.style.display = "none";
    wrapper_documents.style.display = "block";
}

/*Modal project buttons*/
const iframe_project_display = document.getElementById('iframe_project_display');
const button_dataproject_trade = document.getElementById('button_dataproject_trade');
const button_dataproject_polls = document.getElementById('button_dataproject_polls');
const button_dataproject_nba = document.getElementById('button_dataproject_nba');
const button_dataproject_titanic = document.getElementById('button_dataproject_titanic');
const button_dataproject_emp = document.getElementById('button_dataproject_emp')
const button_dataproject_arima = document.getElementById('button_dataproject_arima');

const button_policyproject_trade = document.getElementById('button_policyproject_trade');
const button_policyproject_balkans = document.getElementById('button_policyproject_balkans');
const button_policyproject_transportation = document.getElementById('button_policyproject_transportation');
const button_policyproject_russia = document.getElementById('button_policyproject_russia');
const button_policyproject_fiscalnote = document.getElementById('button_policyproject_fiscalnote');

const button_document_resume = document.getElementById('button_document_resume');
const button_document_transcript = document.getElementById('button_document_transcript');
const button_document_letter = document.getElementById('button_document_letter');

var title_element = document.getElementsByTagName('title');
var page_title = title_element[0].innerText.toLowerCase();

console.log(page_title)

button_dataproject_trade.onclick = function() {
    if (page_title == "home") {
        iframe_project_display.src = "project_files/trade/covid_lockdowns_trade.pdf";
    } else {
        iframe_project_display.src = "../project_files/trade/covid_lockdowns_trade.pdf";
    }
}

button_dataproject_polls.onclick = function() {
    if (page_title == "home") {
        iframe_project_display.src = "project_files/blog/blog_post_final.html";
    } else {
        iframe_project_display.src = "../project_files/blog/blog_post_final.html";
    }
}

button_dataproject_nba.onclick = function() {
    if (page_title == "home") {
        iframe_project_display.src = "project_files/nba/nba_predictions.pdf";
    } else {
        iframe_project_display.src = "../project_files/nba/nba_predictions.pdf";
    }
}

button_dataproject_titanic.onclick = function() {
    window.open("https://www.kaggle.com/ianbogley/titanic-predicting-survivors-with-tidymodels","_blank")
}

button_dataproject_emp.onclick = function() {
    if (page_title == "home") {
        iframe_project_display.src = "project_files/survey/survey_2020.pdf";
    } else {
        iframe_project_display.src = "../project_files/survey/survey_2020.pdf";
    }
}

button_dataproject_arima.onclick = function() {
    if (page_title == "home") {
        iframe_project_display.src = "project_files/arima/arima.pdf";
    } else {
        iframe_project_display.src = "../project_files/arima/arima.pdf";
    }
}

button_policyproject_trade.onclick = function() {
    if (page_title == "home") {
        iframe_project_display.src = "project_files/trade/covid_lockdowns_trade.pdf";
    } else {
        iframe_project_display.src = "../project_files/trade/covid_lockdowns_trade.pdf";
    }
}

button_policyproject_balkans.onclick = function() {
    if (page_title == "home") {
        iframe_project_display.src = "project_files/wb_barriers/wb_barriers.pdf";
    } else {
        iframe_project_display.src = "../project_files/wb_barriers/wb_barriers.pdf";
    }
}

button_policyproject_transportation.onclick = function() {
    if (page_title == "home") {
        iframe_project_display.src = "project_files/transportation/research_proposal_housing.pdf";
    } else {
        iframe_project_display.src = "../project_files/transportation/research_proposal_housing.pdf";
    }
}

button_policyproject_russia.onclick = function() {
    if (page_title == "home") {
        iframe_project_display.src = "project_files/corruption/Russian_corruption.pdf";
    } else {
        iframe_project_display.src = "../project_files/corruption/Russian_corruption.pdf ";
    }
}

button_policyproject_lobbying.onclick = function() {
    if (page_title == "home") {
        iframe_project_display.src = "project_files/lobbying/lobbying.pdf";
    } else {
        iframe_project_display.src = "../project_files/lobbying/lobbying.pdf";
    }
}

button_policyproject_fiscalnote.onclick = function() {
    if (page_title == "home") {
        iframe_project_display.src = "project_files/fiscal_note/ssb5722_fn.pdf";
    } else {
        iframe_project_display.src = "../project_files/fiscal_note/ssb5722_fn.pdf";
    }
}

button_document_resume.onclick = function() {
    if (page_title == "home") {
        iframe_project_display.src = "document_files/resume.pdf";
    } else {
        iframe_project_display.src = "../document_files/resume.pdf";
    }
    console.log("clicked")
}

button_document_transcript.onclick = function() {
    if (page_title == "home") {
        iframe_project_display.src = "document_files/transcript.pdf";
    } else {
        iframe_project_display.src = "../document_files/transcript.pdf";
    }
}

button_document_letter.onclick = function() {
    if (page_title == "home") {
        iframe_project_display.src = "document_files/letter_of_recommendation.pdf";
    } else {
        iframe_project_display.src = "../document_files/letter_of_recommendation.pdf";
    }
}


/*Blog Button Functions*/