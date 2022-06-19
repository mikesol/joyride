varying vec3 vColor;
void main() {
    // Light point
    // distance from center
    float strength = distance(gl_PointCoord, vec2(0.5));
    // brightest at center
    strength = 1.0 - strength;
    // fast fall off
    strength = pow(strength, 10.0);
    // amp up to our desired color based on strength
    vec3 color = mix(vec3(0.0), vColor, strength);
    gl_FragColor = vec4(color, 1.0);
}