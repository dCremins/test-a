{% import "../templates/colors.html" as colors %}
{% import "../templates/typography.html" as type %}
{% import "../templates/alert.html" as callout %}
{% import "../templates/image-download.html" as download %}

# Branding and Assets

To maintain a consistent institute brand, ITRE logos and templates should be used for all institute materials.

If there is no pre-created template or logo available which meets your needs, the following guidelines can be used to match the existing ITRE brand.

## NC State University

As an institute within NC State University, any of the approved NCSU branding can be used in ITRE materials in place of the ITRE branding. The ITRE logo should still be included in the work when possible. More information on NCSU branding standards can be found on the [NC State Branding Page](https://brand.ncsu.edu)

## Colors

ITRE colors match the NC State Base colors, with the Wolf Pack Red as the main color and the Reynolds Red as an accent or hover color. Rather than use a solid black, a dark grey color is preferred.

{{ colors.color([{
    'hex':'c00',
    'name':'red'
    },
  {
    'hex':'900',
    'name':'reynolds'
    },
  {
    'hex':'333',
    'name':'dark grey'
}]) }}

## Typography

The ITRE typeface for logos, business cards, and other printed materials is Futura, with Garamond as a body font for materials with large amounts of text. On the web, the [NC State Typography](https://brand.ncsu.edu/typography/) standards should be used instead.

{{ type.text([{
    'family':'futura',
    'p':'10pt/13px/0.8em'
    },
  {
    'family':'garamond',
    'p':'12pt/16px/1em'
}]) }}

{{ callout.alert('notice', 'Typography on the Web', 'The above fonts are primarily for printed material. When designing ITRE materials for the web, follow the NC State Branding Guidelines. An <a href="https://brand.ncsu.edu/bootstrap/getting-started/">NC State Brand Bootstrap</a> can be downloaded to make those typefaces available.')}}

## Logo

The ITRE logo should be used on all official ITRE materials, both digital and print. Please follow best accessibility practices when using the logo, such as choosing a logo with sufficient contrast and including alt text when displaying the logo online. Further variations of this logo can be found on the ITRE public drive. If you do not have access to the public drive, please contact your network administrator.

{{ download.images([{
    'file': 'itre-logo.png',
    'alt': 'ITRE Logo with Text'
    },
  {
    'file': 'itre-arrow-transparent.png',
    'alt': 'ITRE Logo'
    },
  {
    'file': 'itre-just-arrow-transparent.png',
    'alt': 'ITRE Logo Arrow'
}]) }}

## Materials

Some ITRE materials, such as business cards and presentation templates, have been pre-generated for your use and are available on the ITRE public drive. If you do not have access to the public drive, please contact your network administrator.
