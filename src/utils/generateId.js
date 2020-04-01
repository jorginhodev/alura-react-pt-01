let lastId = 10;

export default function(prefix = "id") {
  lastId++;
  return `${prefix}${lastId}`;
}
