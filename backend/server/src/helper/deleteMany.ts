/* Author: Gabriel Novais | Github: ganovais | LinkedIn: ganovais */
export function deleteMany<T>(entityDTO: any, current: T, relation: string) {
  return current[relation]
    .filter(
      (quality) => !entityDTO[relation].some((item) => quality.id === item.id),
    )
    .map((quality) => ({ id: quality.id }));
}
