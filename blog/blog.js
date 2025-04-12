/*Blog Functionality*/
const iframe_blog_display = document.getElementById('iframe_blog_display')
const button_blogpost1 = document.getElementById('BlogPost1')
const button_blogpost2 = document.getElementById('BlogPost2')

button_blogpost1.onclick = function() {
    iframe_blog_display.src = "Blog1_2020Inflation.html"
}
button_blogpost2.onclick = function() {
    iframe_blog_display.src = 'Blog2_Vectors.html'
}
