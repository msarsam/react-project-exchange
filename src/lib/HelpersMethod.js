const HelpersMethod = {};

HelpersMethod.dateFormat = (arg) => {
  let d = new Date(arg);
  return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
};

HelpersMethod.getDateRange = () => {
    let todayDate = new Date();
    let priorDate = new Date();
    priorDate.setDate(priorDate.getDate() - 30);

    return {
      'start': HelpersMethod.dateFormat(priorDate),
      'end': HelpersMethod.dateFormat(todayDate)
    };
  };

export default HelpersMethod;

