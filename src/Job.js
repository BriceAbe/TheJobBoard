function Job(props) {
  const { title, contractType, country, city } = props;
  return (
    <div className={props.className}>
      <h1>{title}</h1>

      <p>
        {contractType} - {country} - {city}
      </p>
    </div>
  );
}

export default Job;
