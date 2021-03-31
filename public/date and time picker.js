// JavaScript Document
$(function() {
  $('input[name="datetimes"]').daterangepicker({
    timePicker: true,
    startDate: moment().startOf('hour'),
    endDate: moment().startOf('hour').add(32, 'hour'),
    locale: {
      format: 'M/DD hh:mm A'
    }
  });
});



const datePicker = (selector, type = "date") => {
  const types = { DATE: "date", TIME: "time", DATETIME: "datetime-local" };
  const elm = document.querySelector(selector);
  
  const applyFormatting = (dateString, type, format) => {
    if (type === types.TIME && dateString) {
      const [ h, m ] = dateString.split(":").map(s => parseInt(s, 10));
      return moment().hour(h).minutes(m).format(format);
    }
    return moment(dateString).format(format);
  }
  
  const prettifyDate = (dateString, type) => {
    const { DATE, TIME, DATETIME } = types;
    const format = { [DATE]: "ll", [TIME]: "hh:mm A", [DATETIME]: "ll hh:mm" }[type];
    return applyFormatting(dateString, type, format);
  }

  const uglifyDate = (dateString, type) => {
    const { DATE, TIME, DATETIME } = types;
    const format = { [DATE]: "YYYY-MM-DD", [TIME]: "hh:mm", [DATETIME]: "YYYY-MM-DDThh:mm" }[type];
    return applyFormatting(dateString, type, format);
  }

  elm.addEventListener("focus", function(e) {
    if (this.value) this.value = uglifyDate(this.value, type);
    this.setAttribute("_type", this.getAttribute("type"));
    this.setAttribute("type", type);
  });

  elm.addEventListener("blur", function() {
    this.setAttribute("type", this.getAttribute("_type"));
    this.removeAttribute("_type");
    if (this.value) this.value = prettifyDate(this.value, type);
  });

  elm.value = prettifyDate(undefined, type);
}

datePicker(".start-date");
datePicker(".end-date");
datePicker(".start-date-time", "datetime-local");
datePicker(".end-date-time", "datetime-local");
datePicker(".start-time", "time");
datePicker(".end-time", "time");
