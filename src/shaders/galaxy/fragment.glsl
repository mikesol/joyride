uniform sampler2D uButterfly;
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
    vec4 colorRaw = texture2D(uButterfly, vec2(gl_PointCoord.x, 1.0 - gl_PointCoord.y));
    vec4 color = vec4(mix(vColor.x, colorRaw.x, strength), mix(vColor.y, colorRaw.y, strength), mix(vColor.z, colorRaw.z, strength), colorRaw.a * 0.1);
    // vec3 color3 = mix(vec3(0.0), vColor, strength);
    // vec4 color = vec4(color3, 1.0);
    gl_FragColor = color;
}