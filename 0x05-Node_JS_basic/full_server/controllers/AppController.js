/**
 * Contains the miscellaneous route handlers.
 * @author Motekema Mahlanya <https://github.com/Motekema>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
